"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2, Radar } from "lucide-react";
import { AuthModal } from "./AuthModal";
import { addProduct } from "@/app/actions";
import { toast } from "sonner";

const AddProductForm = ({user}) => {
  const [url, setUrl] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("url", url);

    const result = await addProduct(formData);
    if(result.error) {
      toast.error(result.error);
    }else{
      toast.success(result.message||"Product added successfully!");
      setUrl("");
    }
    setLoading(false);
    // Add your form submission logic here
  };

  return (
    <>
      <form className="mx-auto max-w-2xl" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row items-stretch gap-3">
          {/* URL Input */}
          <Input
            type="url"
            placeholder="Paste product URL here…"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="h-12 text-base flex-1"
          />

          {/* CTA Button */}
          <Button
            type="submit"
            className="h-12 bg-orange-400 text-white hover:bg-orange-500 px-6 flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Adding</span>
              </>
            ) : (
              <>
                <Radar className="h-4 w-4" />
                <span>Add Product</span>
              </>
            )}
          </Button>
        </div>
      </form>
      {/* Auth Modal */}
      <AuthModal
        isopen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
};

export default AddProductForm;
