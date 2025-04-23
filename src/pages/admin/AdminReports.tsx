
import React from 'react';
import AdminLayout from "@/components/layout/AdminLayout";
import CommunicationTemplates from '@/components/admin/templates/CommunicationTemplates';

const AdminReports = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">Reports & Templates</h2>
        <CommunicationTemplates />
      </div>
    </AdminLayout>
  );
};

export default AdminReports;
