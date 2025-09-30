import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}

interface CartItem {
  id: number;
  quantity: number;
}

interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  wishlist: number[];
  cart: CartItem[];
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  addToWishlist: (productId: number) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  addToCart: (productId: number, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  getCartItemQuantity: (productId: number) => number;
  clearCart: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load user data from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('perfecthifi_user');
    const savedWishlist = localStorage.getItem('perfecthifi_wishlist');
    const savedCart = localStorage.getItem('perfecthifi_cart');

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('perfecthifi_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('perfecthifi_user');
    }
  }, [user]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('perfecthifi_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('perfecthifi_cart', JSON.stringify(cart));
  }, [cart]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call - in real app, this would be an actual API
    const savedUsers = localStorage.getItem('perfecthifi_users');
    const users = savedUsers ? JSON.parse(savedUsers) : [];

    const foundUser = users.find((u: any) => u.email === email && u.password === password);

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      return true;
    }

    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call - in real app, this would be an actual API
    const savedUsers = localStorage.getItem('perfecthifi_users');
    const users = savedUsers ? JSON.parse(savedUsers) : [];

    // Check if user already exists
    const existingUser = users.find((u: any) => u.email === email);
    if (existingUser) {
      return false;
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      createdAt: new Date().toISOString(),
    };

    // Save to users list
    users.push(newUser);
    localStorage.setItem('perfecthifi_users', JSON.stringify(users));

    // Auto-login the new user
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);

    return true;
  };

  const logout = () => {
    setUser(null);
    setWishlist([]);
  };

  const addToWishlist = (productId: number) => {
    setWishlist(prev => {
      if (!prev.includes(productId)) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist(prev => prev.filter(id => id !== productId));
  };

  const isInWishlist = (productId: number) => {
    return wishlist.includes(productId);
  };

  const addToCart = (productId: number, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { id: productId, quantity }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getCartItemQuantity = (productId: number) => {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const clearCart = () => {
    setCart([]);
  };

  const value: UserContextType = {
    user,
    isLoggedIn: !!user,
    wishlist,
    cart,
    login,
    register,
    logout,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    getCartItemQuantity,
    clearCart,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
