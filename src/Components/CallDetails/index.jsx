import React, { useCallback } from 'react'
import './styles.css';
import { useSelector } from 'react-redux';
import { hideCallDetails } from '../../Store/actions';
import Button from '../../Common/Components/Button';
import Call from '../Call';
import { archiveActivityUseCase } from '../../UseCases/archiveActivityUseCase';

function CallDetails() {
    const activeCallDetailsId = useSelector(state => state.activeCallDetailsId);

    const archiveActiveCallId = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        archiveActivityUseCase(activeCallDetailsId); 
    }, [activeCallDetailsId])

    if (!activeCallDetailsId) {
        return null;
    }

    return (
        <div 
            className={`call-details-overlay  ${activeCallDetailsId ? 'active' : ''}`}
            onClick={hideCallDetails}
        >
            <div className={`call-details-wrapper`}>
                <div className='call-details-container'>
                    <Call id={activeCallDetailsId} disabled />
                    <div className='btn-group'>
                        <Button onClick={archiveActiveCallId}>
                            Archive
                        </Button>
                    </div>

                    <p>UI is not taken care, due to less time</p>
                </div>
            </div>
        </div>
    )
}

export default CallDetails;