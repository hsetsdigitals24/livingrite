'use client';

import { Card, CardHeader, CardBody } from '@/components/ui';

export default function PortalDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Client Portal</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Care Updates</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600">View latest care updates from your team</p>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Documents</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600">Access your health documents</p>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Messages</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600">Communicate with your care team</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
