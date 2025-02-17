import React from 'react';

const ContestantManagement = () => {
    return (
        <div>
            <h2>Contestant Management</h2>
            <form>
                <input type="text" placeholder="Name" required />
                <textarea placeholder="Biography" required></textarea>
                <input type="file" accept="image/*" />
                <button type="submit">Add Contestant</button>
            </form>
        </div>
    );
};

export default ContestantManagement;
