import React from 'react'

export default function page() {
  return (
    <div className="p-6 bg-gray-50">
    {/* Header navigation */}
    <div className="flex items-center gap-2 text-xs uppercase font-medium text-gray-600 mb-4">
      <span>SHIPPING ZONE</span>
      <span className="text-gray-400">|</span>
      <span>SHIPPING CLASSES</span>
    </div>
    
    {/* Title */}
    <h1 className="text-2xl font-semibold mb-6">Shipping Zone &gt; Zone</h1>
    
    {/* Form fields */}
    <div className="space-y-4 mb-6">
      <div className="grid grid-cols-4 items-center">
        <label className="text-sm">Zone name</label>
        <input 
          type="text" 
          className="col-span-3 border border-gray-300 rounded p-2 w-full"
        />
      </div>
      
      <div className="grid grid-cols-4 items-center">
        <label className="text-sm">Zone regions</label>
        <input 
          type="text" 
          className="col-span-3 border border-gray-300 rounded p-2 w-full"
        />
      </div>
    </div>
    
    {/* Shipping methods section */}
    <h2 className="text-base font-medium mb-4">Shipping methods</h2>
    
    {/* Table */}
    <div className="bg-white rounded-md border border-gray-200 mb-4">
      <div className="grid grid-cols-3 p-4 border-b border-gray-200 text-sm font-medium">
        <div>Titled</div>
        <div>Enabled</div>
        <div>Description</div>
      </div>
      {/* Empty state or would contain rows */}
    </div>
    
    {/* Action buttons */}
    <div className="flex justify-end mb-4">
      <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium">
        Add Shipping Method
      </button>
    </div>
    
    <div>
      <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-500">
        Base Shipping Method
      </button>
    </div>
  </div>
  )
}
