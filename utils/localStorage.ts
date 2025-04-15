interface Item {
  id: string;
  username: string;
  title: string;
  url: string;
  content: string;
  image: string;
  createdAt: Date;
}
export interface UserDetails {
  username: string;
  displayName: string;
  password?: string; // Storing plain password is insecure
  image?: string;
  email?: string;
  description?: string;
  createdAt: Date;
}



const STORAGE_KEY = 'csn-next-items';

/**
 * Save item to localStorage
 * @param item Item to save
 * @returns Saved item with generated id and createdAt timestamp
 */
export const saveItem = (item: Omit<Item, 'id' | 'createdAt'>): Item => {
  // Get existing items
  const existingItems = getItems();
  
  // Create new item with id and timestamp
  const newItem: Item = {
    ...item,
    id: generateId(),
    createdAt: new Date()
  };
  
  // Save to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify([newItem, ...existingItems]));
  
  return newItem;
};
//user list 보여주기
export const getUserDetailsArray = (): UserDetails[] => {
  if (typeof window === "undefined") return []; // 서버에서 localStorage 접근 방지
  const data = localStorage.getItem("csn-next-item");
  return data ? JSON.parse(data) : [];
};

export const getUserDetails = (username: string): UserDetails | undefined => {
  console.log(username,'username!!!!!!!!!!!')

  const allUsers = getUserDetailsArray();
  console.log(allUsers,'allUsers!!!!!!!!!!!')
  return allUsers.find(u => u.username === username);
};
// Corrected saveUserDetails
export const saveUserDetails = (userDetails: Omit<UserDetails, 'createdAt'>): void => {
  if (typeof window === 'undefined') return;

  const existingUserDetailsArray = getUserDetailsArray();
console.log(new Date().toLocaleString(), 'Current date and time')
  // Create the new user details object, adding createdAt timestamp
  const newUserDetails: UserDetails = {
    ...userDetails,
    createdAt: new Date()
  };



  // Check if user already exists to prevent duplicates (optional: could update instead)
  const userExists = existingUserDetailsArray.some(u => u.username === newUserDetails.username);

  let updatedArray: UserDetails[];
  if (userExists) {
     // If user exists, update their details (optional behavior)
     console.warn(`User ${newUserDetails.username} already exists. Updating details.`);
     updatedArray = existingUserDetailsArray.map(u =>
        u.username === newUserDetails.username ? { ...u, ...newUserDetails, createdAt: u.createdAt } : u // Keep original createdAt on update
     );
  } else {
    // Add the new user to the beginning of the array
    updatedArray = [newUserDetails, ...existingUserDetailsArray];
  }


  localStorage.setItem("csn-next-item", JSON.stringify(updatedArray));
};




export const getItems = (): Item[] => {
  // Check if window is defined (for SSR)
  if (typeof window === 'undefined') {
    return [];
  }
  
  // Get items from localStorage
  const items = localStorage.getItem(STORAGE_KEY);
  
  // Parse and return items, or empty array if none
  return items ? JSON.parse(items) : [];
};

/**
 * Get a single item by id
 * @param id Item id
 * @returns Item or undefined if not found
 */
export const getItem = (username: string): Item | undefined => {
  const items = getItems();

  return items.find(item => item.username === username);
};




export const deleteItem = (id: string): boolean => {
  const items = getItems();
  const filteredItems = items.filter(item => item.id !== id);
  
  // If lengths are the same, item was not found
  if (items.length === filteredItems.length) {
    return false;
  }
  
  // Save filtered items
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredItems));
  return true;
};


export const editItem = (id: string, updates: Partial<Omit<Item, 'id' | 'createdAt'>>): Item | undefined => {
  const items = getItems();
  const itemIndex = items.findIndex(item => item.id === id);
  
  // Return undefined if item not found
  if (itemIndex === -1) {
    return undefined;
  }
  
  // Update the item
  const updatedItem = {
    ...items[itemIndex],
    ...updates
  };
  
  // Replace the item in the array
  items[itemIndex] = updatedItem;
  
  // Save updated items
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  
  return updatedItem;
};

/**
 * Clear all items from localStorage
 */
export const clearItems = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};


const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};


export const getCartItems = (): any[] => {
  if (typeof window === 'undefined') {
    return [];
  }
  
  const cartItems = localStorage.getItem('csn-next-cart');
  return cartItems ? JSON.parse(cartItems) : [];
};

/**
 * Add item to cart
 * @param product Product to add to cart
 * @param quantity Quantity to add
 * @param size Size (for clothing items)
 */
export const addToCart = (product: any, quantity: number, size?: string): void => {
  const cartItems = getCartItems();
  
  // Create cart item
  const cartItem = {
    id: product.id || generateId(),
    title: product.name || product.title,
    price: product.price,
    quantity,
    size,
    image: product.imageUrl || product.image,
    addedAt: Date.now()
  };
  
  // Add to cart
  localStorage.setItem('csn-next-cart', JSON.stringify([...cartItems, cartItem]));
};

/**
 * Remove item from cart
 * @param id Item id to remove
 */
export const removeFromCart = (id: string): void => {
  const cartItems = getCartItems();
  const filteredItems = cartItems.filter(item => item.id !== id);
  localStorage.setItem('csn-next-cart', JSON.stringify(filteredItems));
};

/**
 * Clear cart
 */
export const clearCart = (): void => {
  localStorage.removeItem('csn-next-cart');
};
