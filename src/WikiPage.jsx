import React from 'react';

const wikiStyles = {
    container: { fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '1200px', margin: '0 auto' },
    nav: { position: 'fixed', top: '20px', left: '20px', width: '200px', padding: '10px', borderRight: '1px solid #ccc', maxHeight: '90vh', overflowY: 'auto' },
    navLink: { display: 'block', margin: '5px 0', textDecoration: 'none', color: '#007bff', fontSize: '14px' },
    content: { marginLeft: '250px', paddingTop: '10px' },
    h2: { borderBottom: '2px solid #eee', paddingBottom: '5px', marginTop: '30px' },
    h3: { color: '#333', marginTop: '20px' },
    usageExample: { backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', whiteSpace: 'pre-wrap', fontFamily: 'monospace', overflowX: 'auto' },
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '10px' },
    th: { border: '1px solid #ddd', padding: '10px', textAlign: 'left', backgroundColor: '#f9f9f9' },
    td: { border: '1px solid #ddd', padding: '10px', fontSize: '14px' },
    code: { backgroundColor: '#e9e9e9', padding: '2px 4px', borderRadius: '3px', fontFamily: 'monospace', fontSize: '1em' }
};


const ComponentDoc = ({ name, data }) => (
    <div id={name} style={{ marginBottom: '50px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h1 style={{ color: '#007bff', borderBottom: '3px solid #007bff', paddingBottom: '10px' }}>{name}</h1>
        <p style={{ fontSize: '1.1em', color: '#555' }}>{data.description}</p>

        <h2 style={wikiStyles.h2}>Usage Example</h2>
        <pre style={wikiStyles.usageExample}>
          {data.usageExample}
        </pre>

        <h2 style={wikiStyles.h2}>Props</h2>
        <table style={wikiStyles.table}>
            <thead>
                <tr>
                    <th style={wikiStyles.th}>Name</th>
                    <th style={wikiStyles.th}>Type</th>
                    <th style={wikiStyles.th}>Required</th>
                    <th style={wikiStyles.th}>Default</th>
                    <th style={wikiStyles.th}>Description</th>
                </tr>
            </thead>
            <tbody>
                {data.props.map((prop, i) => (
                    <tr key={i}>
                        <td style={wikiStyles.td}><code style={wikiStyles.code}>{prop.name}</code></td>
                        <td style={wikiStyles.td}>{prop.type}</td>
                        <td style={wikiStyles.td}><strong>{prop.required ? 'YES' : 'No'}</strong></td>
                        <td style={wikiStyles.td}>{prop.default}</td>
                        <td style={wikiStyles.td}>{prop.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        {data.childProps && (
            <>
                <h3 style={wikiStyles.h3}>Child/Injected Props (for use within sections/children)</h3>
                <table style={wikiStyles.table}>
                    <thead>
                        <tr>
                            <th style={wikiStyles.th}>Name</th>
                            <th style={wikiStyles.th}>Type</th>
                            <th style={wikiStyles.th}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.childProps.map((prop, i) => (
                            <tr key={i}>
                                <td style={wikiStyles.td}><code style={wikiStyles.code}>{prop.name}</code></td>
                                <td style={wikiStyles.td}>{prop.type}</td>
                                <td style={wikiStyles.td}>{prop.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )}

        {data.subComponents && (
            <>
                <h2 style={wikiStyles.h2}>Sub-Components</h2>
                {data.subComponents.map((sub, i) => (
                    <div key={i} style={{ borderLeft: '3px solid #ccc', paddingLeft: '15px', marginBottom: '20px' }}>
                        <h3 style={{ ...wikiStyles.h3, marginTop: '10px' }}>{`<${sub.componentName} />`}</h3>
                        <p>{sub.description}</p>
                        <table style={wikiStyles.table}>
                            <thead>
                                <tr>
                                    <th style={wikiStyles.th}>Name</th>
                                    <th style={wikiStyles.th}>Type</th>
                                    <th style={wikiStyles.th}>Default</th>
                                    <th style={wikiStyles.th}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sub.props.map((prop, j) => (
                                    <tr key={j}>
                                        <td style={wikiStyles.td}><code style={wikiStyles.code}>{prop.name}</code></td>
                                        <td style={wikiStyles.td}>{prop.type}</td>
                                        <td style={wikiStyles.td}>{prop.default}</td>
                                        <td style={wikiStyles.td}>{prop.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </>
        )}
        
        {data.notes && (
             <>
                <h2 style={wikiStyles.h2}>Notes</h2>
                <p>{data.notes}</p>
            </>
        )}
    </div>
);


export const ComponentWikiRenderer = ({ componentDocs }) => {
    if (!componentDocs) { 
        return <h2>Can't find docs or no docs supplied for renderer</h2>
    }
    const componentNames = Object.keys(componentDocs);

    return (
        <div style={wikiStyles.container}>
            {/* Navigation Sidebar */}
            <nav style={wikiStyles.nav}>
                <h3 style={{ marginTop: 0 }}>Library Components</h3>
                {componentNames.map(name => (
                    <a key={name} href={`#${name}`} style={wikiStyles.navLink}>
                        {`<${name} />`}
                    </a>
                ))}
            </nav>

            {/* Main Content Area */}
            <div style={wikiStyles.content}>
                {componentNames.map(name => (
                    <ComponentDoc 
                        key={name} 
                        name={name} 
                        data={componentDocs[name]} 
                    />
                ))}
            </div>
        </div>
    );
};

