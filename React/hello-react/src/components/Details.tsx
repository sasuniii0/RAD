const DetailCard = (props:any) => {
    return <div className = "detail-card">
        <h1>Detail Card Component</h1>
        <p>This is a detail card component.</p>
        {props.children}

        <h6>{props.name}</h6>
    </div>;
}

// component must be start with captial letter beacuse we mismatches with HTML tags
// React components must be capitalized
// React components are functions that return JSX
// Export the component to be used in other parts of the application
export default DetailCard;