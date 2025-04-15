interface Item {
  id: string;
  username: string;
  title: string;
  url: string;
  content: string;
  image: string;
  createdAt: number;
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
    createdAt: Date.now()
  };
  
  // Save to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify([newItem, ...existingItems]));
  
  return newItem;
};

/**
 * Get all items from localStorage
 * @returns Array of items
 */
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
export const getItem = (id: string): Item | undefined => {
  const items = getItems();
  return items.find(item => item.id === id);
};

/**
 * Delete item from localStorage
 * @param id Item id to delete
 * @returns true if deleted, false if not found
 */
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

/**
 * Edit an existing item
 * @param id Item id to edit
 * @param updates Updates to apply to the item
 * @returns Updated item or undefined if not found
 */
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

/**
 * Generate a random id
 * @returns Random id string
 */
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

/**
 * Get cart items from localStorage
 */
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
