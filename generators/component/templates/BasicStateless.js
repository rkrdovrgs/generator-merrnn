import React from 'react';

const <%=options.componentName %> = (props) => (
    <div>
        {/*YOUR HTML GOES HERE e.g.*/}
        <label style={styles.successText}>Success :)</label>
    </div>
);

const styles = {
    // STYLE RULES GO HERE e.g.
    successText: {
        fontSize: 25,
        color: 'green'
    }
}

export default <%=options.componentName %>;