import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function DKAPlatform() {
  const [products, setProducts] = useState([
    { name: "Chaussures", price: "25€", seller: "Boutique A" },
    { name: "Sac à main", price: "45€", seller: "Boutique B" },
  ]);

  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  const addProduct = () => {
    setProducts([...products, { ...newProduct, seller: "Vous" }]);
    setNewProduct({ name: "", price: "" });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Plateforme de vente - DKA</h1>

      <Tabs defaultValue="marketplace" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="vendre">Vendre</TabsTrigger>
        </TabsList>

        <TabsContent value="marketplace">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((product, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-sm text-gray-500">Prix : {product.price}</p>
                  <p className="text-sm text-gray-500">Vendu par : {product.seller}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="vendre">
          <div className="space-y-4">
            <Input
              placeholder="Nom du produit"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <Input
              placeholder="Prix"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <Button onClick={addProduct}>Publier le produit</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}