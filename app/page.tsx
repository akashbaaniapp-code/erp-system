import {
  Package,
  Warehouse,
  ShoppingCart,
  Users,
} from "lucide-react";

import StatCard from "@/components/dashboard/stat-card";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800">
        ERP Dashboard
      </h1>

      <p className="mt-2 text-slate-600">
        Business overview and management
      </p>


      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        <StatCard
          title="Total Products"
          value="0"
          icon={<Package size={28} />}
        />

        <StatCard
          title="Total Stock"
          value="0"
          icon={<Warehouse size={28} />}
        />

        <StatCard
          title="Total Sales"
          value="0"
          icon={<ShoppingCart size={28} />}
        />

        <StatCard
          title="Customers"
          value="0"
          icon={<Users size={28} />}
        />

      </div>
    </div>
  );
}
