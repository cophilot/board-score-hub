import { useNavigate } from 'react-router-dom';
import By from '../../components/By';
import './CreateCustomView.scss';
import { useEffect } from 'react';
import StyleUtils from '../../api/utils/StyleUtils';

/**
 * This is the CreateCustomView
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-25
 */
function CreateCustomView() {
    const navigate = useNavigate();
    useEffect(() => {
        StyleUtils.setDefaultValues();
        document.title = 'BoardScoreHub';
    }, []);
    return (
        <div className="content">
            <div className="create-custom">
                <h1>Create Custom Table</h1>
                <div className="row">
                    <label htmlFor="name">Title*:</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="My First Table"
                    />
                </div>
                <div className="row">
                    <label htmlFor="name">Background Color:</label>
                    <input type="text" id="title" placeholder="#FFFFFF" />
                </div>
                <button
                    className="btn selected mt"
                    onClick={() => navigate('/')}>
                    Home
                </button>
                <By />
            </div>
        </div>
    );
}

export default CreateCustomView;
