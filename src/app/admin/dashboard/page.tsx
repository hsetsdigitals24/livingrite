'use client';

import { Card, CardHeader, CardBody } from '@/components/ui';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Clients', value: '0' },
            { label: 'Active Bookings', value: '0' },
            { label: 'Revenue', value: '₦0' },
            { label: 'New Leads', value: '0' },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardBody>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Recent Bookings</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600">No recent bookings</p>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Lead Pipeline</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600">No leads yet</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
