'use client'

import { useState } from 'react'
import { Wallet, LayoutGrid, Home, CreditCard, Bell, FileText, ShoppingCart, MessageSquare, HeadphonesIcon, Settings} from 'lucide-react'

export function NavMenu() {
  const [activeItem, setActiveItem] = useState('OFFERINGS')

  const menuItems = [
    { name: 'WALLET MANAGEMENT', icon: Wallet },
    { name: 'MY PORTFOLIO', icon: LayoutGrid },
    { name: 'OFFERINGS', icon: Home },
    { name: 'MY TRANSACTIONS', icon: CreditCard },
    { name: 'NEWS / UPDATES', icon: Bell },
    { name: 'CONTRACTS', icon: FileText },
    { name: 'MARKETPLACE', icon: ShoppingCart },
    { name: 'MESSAGES', icon: MessageSquare },
    { name: 'SUPPORT', icon: HeadphonesIcon },
    { name: 'SETTINGS', icon: Settings },
  ]

  return (
    <div className="w-64 bg-[#0a2540] text-white p-4 min-h-screen">
      <div className="flex items-center mb-8">
        <h1 className="text-2xl font-bold text-white">FractionsX</h1>
      </div>
      <nav>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                className={`flex items-center w-full py-3 px-2 rounded-md transition-colors ${
                  activeItem === item.name ? 'bg-white text-[#0a2540]' : 'hover:bg-white/10'
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="text-sm">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}