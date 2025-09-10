// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} ShopEasy. All rights reserved.
      </div>
    </footer>
  );
}
