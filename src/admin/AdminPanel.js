import React from 'react';
import ContestantManagement from './ContestantManagement';
import VotingManagement from './VotingManagement';
import StreamingManagement from './StreamingManagement';
import UserManagement from './UserManagement';
import AnalyticsDashboard from './AnalyticsDashboard';

const AdminPanel = () => {
    return (
        <div>
            <h1>Admin Panel</h1>
            <ContestantManagement />
            <VotingManagement />
            <StreamingManagement />
            <UserManagement />
            <AnalyticsDashboard />
        </div>
    );
};

export default AdminPanel;
