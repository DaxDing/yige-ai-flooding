import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockProjects } from '../data/mockProjects';

const ProjectIndex = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const project = mockProjects.find(p => p.id === parseInt(id));

        if (project) {
            // Redirect based on project status
            if (project.status === 'in-delivery') {
                navigate('in-delivery', { replace: true });
            } else if (project.status === 'post-delivery') {
                navigate('post-delivery', { replace: true });
            } else {
                // Default to pre-delivery for 'pre-delivery' or unknown status
                navigate('pre-delivery', { replace: true });
            }
        } else {
            // Fallback if project not found
            navigate('pre-delivery', { replace: true });
        }
    }, [id, navigate]);

    return null; // Or a loading spinner
};

export default ProjectIndex;
