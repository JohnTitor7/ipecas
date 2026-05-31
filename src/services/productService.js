import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "./firebase";

const PRODUCTS_COLLECTION = "products";

export function listenToProducts(onProductsChange) {
  const productsQuery = query(
    collection(db, PRODUCTS_COLLECTION),
    orderBy("id", "asc")
  );

  return onSnapshot(productsQuery, (snapshot) => {
    const products = snapshot.docs.map((document) => ({
      firestoreId: document.id,
      ...document.data(),
    }));

    onProductsChange(products);
  });
}

export async function addProduct(product) {
  await addDoc(collection(db, PRODUCTS_COLLECTION), product);
}

export async function updateProduct(product) {
  const productRef = doc(db, PRODUCTS_COLLECTION, product.firestoreId);

  const productToUpdate = {
    id: product.id,
    name: product.name,
    category: product.category,
    brand: product.brand,
    model: product.model,
    price: product.price,
    stock: product.stock,
    image: product.image || "",
  };

  await updateDoc(productRef, productToUpdate);
}

export async function deleteProduct(firestoreId) {
  await deleteDoc(doc(db, PRODUCTS_COLLECTION, firestoreId));
}

export async function seedProductsIfEmpty(initialProducts) {
  const snapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));

  if (!snapshot.empty) {
    return;
  }

  const createProducts = initialProducts.map((product) => {
    const productRef = doc(collection(db, PRODUCTS_COLLECTION));

    return setDoc(productRef, {
      ...product,
      image: product.image || "",
    });
  });

  await Promise.all(createProducts);
}

export async function resetProducts(initialProducts) {
  const snapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));

  const deleteProducts = snapshot.docs.map((document) =>
    deleteDoc(doc(db, PRODUCTS_COLLECTION, document.id))
  );

  await Promise.all(deleteProducts);

  const createProducts = initialProducts.map((product) => {
    const productRef = doc(collection(db, PRODUCTS_COLLECTION));

    return setDoc(productRef, {
      ...product,
      image: product.image || "",
    });
  });

  await Promise.all(createProducts);
}