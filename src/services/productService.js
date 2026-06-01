import {
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
  const normalizedProduct = normalizeProduct(product);
  const productRef = doc(db, PRODUCTS_COLLECTION, normalizedProduct.slug);

  await setDoc(productRef, normalizedProduct, { merge: true });
}

export async function updateProduct(product) {
  const normalizedProduct = normalizeProduct(product);
  const firestoreId = product.firestoreId || normalizedProduct.slug;
  const productRef = doc(db, PRODUCTS_COLLECTION, firestoreId);

  await updateDoc(productRef, normalizedProduct);
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
    const normalizedProduct = normalizeProduct(product);
    const productRef = doc(db, PRODUCTS_COLLECTION, normalizedProduct.slug);

    return setDoc(productRef, normalizedProduct);
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
    const normalizedProduct = normalizeProduct(product);
    const productRef = doc(db, PRODUCTS_COLLECTION, normalizedProduct.slug);

    return setDoc(productRef, normalizedProduct);
  });

  await Promise.all(createProducts);
}

function normalizeProduct(product) {
  const normalizedProduct = {
    id: product.id,
    name: product.name || "",
    category: product.category || "",
    brand: product.brand || "",
    model: product.model || "",
    price: product.price || "",
    quantity: Number(product.quantity) || 0,
    stock: product.stock || "Disponível",
    image: product.image || "",
  };

  return {
    ...normalizedProduct,
    slug: createProductSlug(normalizedProduct),
  };
}

function createProductSlug(product) {
  return `${product.category}-${product.brand}-${product.model}-${product.name}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}