"use client";

import { useState } from "react";
import { deleteProduct } from "@/app/actions";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Trash2,
  TrendingDown,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import PriceChart from "./PriceChart";

export default function ProductCard({ product }) {
  const [showChart, setShowChart] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Remove this product from tracking?")) return;
    setDeleting(true);
    await deleteProduct(product.id);
  };

  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-start gap-4">
          {/* IMAGE */}
          <div className="w-20 h-20 flex-shrink-0 rounded-md border bg-white flex items-center justify-center">
            {product.image_url && (
              <img
                src={product.image_url}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>

          {/* CONTENT */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base font-medium text-gray-900 text-left leading-tight line-clamp-4">
              {product.name}
            </h3>

            <div className="mt-2 flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-semibold text-orange-500">
                {product.currency} {product.current_price}
              </span>

              <Badge variant="secondary" className="h-6 gap-1">
                <TrendingDown className="w-3 h-3" />
                Tracking
              </Badge>
            </div>

            {/* ACTIONS */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowChart(!showChart)}
                className="h-8 gap-1"
              >
                {showChart ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Hide Chart
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Show Chart
                  </>
                )}
              </Button>

              <Button variant="outline" size="sm" asChild className="h-8 gap-1">
                <Link href={product.url} target="_blank">
                  <ExternalLink className="w-4 h-4" />
                  View
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                disabled={deleting}
                onClick={handleDelete}
                className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50 gap-1"
              >
                <Trash2 className="w-4 h-4" />
                Remove
              </Button>
            </div>
          </div>
        </div>

        {/* CHART */}
        {showChart && (
          <div className="mt-4 border-t pt-4">
            <PriceChart productId={product.id} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
