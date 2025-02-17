import React from 'react';

const UserManagement = () => {
    return (
        <div>
            <h2>User Management</h2>
            <form>
                <input type="text" placeholder="User Email" required />
                <button type="submit">Manage User</button>
            </form>
        </div>
    );
};

export default UserManagement;
