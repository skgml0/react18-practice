import React from 'react';
import Dialog from './Dialog';
import CustomDialog from './CustomDialog';
function WelcomeDialog(props) {
    // return (
    //     <Dialog>
    //         <h1>Welcome</h1>
    //         <h5>Thank you!</h5>
    //     </Dialog>
    // );

    return (
        <CustomDialog title="welcome" description="Today is..." />
    )
}

export default WelcomeDialog;