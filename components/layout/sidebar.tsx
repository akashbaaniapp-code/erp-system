import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Warehouse,
  Users,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    icon: Package,
  },
  {
    name: "Sales",
    icon: ShoppingCart,
  },
  {
    name: "Inventory",
    icon: Warehouse,
  },
  {
    name: "Customers",
    icon: Users,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r bg-white p-5">
      <h1 className="mb-8 text-2xl font-bold text-slate-800">
        ERP System
      </h1>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="flex cursor-pointer items-center gap-3 rounded-lg p-3 text-slate-600 hover:bg-slate-100"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
