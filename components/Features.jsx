"use client";

import { motion } from "framer-motion";
import { Zap, BellRing, Globe } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/animations";

const ICON_MAP = {
  zap: Zap,
  bell: BellRing,
  globe: Globe,
};

export default function Features({ features }) {
  return (
    <motion.div
      className="mx-auto mt-8 mb-16 max-w-5xl px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = ICON_MAP[feature.icon];

          return (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="group flex h-full flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center transition
                         hover:border-orange-200 hover:shadow-md"
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-full
                           bg-orange-100 text-orange-500 transition group-hover:bg-orange-200"
              >
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
