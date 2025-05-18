import React, { useState, useRef, useEffect } from 'react';
import '../DropdownMenu.css';

const DropdownMenu = ({ label, items }) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    return (
        <div className="dropdown" ref={menuRef} style={{ position: 'relative', display: 'inline-block' }}>
            <button onClick={() => setOpen((prev) => !prev)} className="dropdown-toggle">
                {label}
            </button>
            {open && (
                <ul className="dropdown-menu" 
                // style={{
                //     // position: 'absolute',
                //     // top: '100%',
                //     // left: 0,
                //     // background: '#fff',
                //     // border: '1px solid #ccc',
                //     // listStyle: 'none',
                //     // margin: 0,
                //     // padding: '0.5rem 0',
                //     // minWidth: '150px',
                //     // zIndex: 1000
                // }}
                >
                    {items.map((item, idx) => (
                        <li key={idx} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
                                onClick={() => {
                                    setOpen(false);
                                    if (item.onClick) item.onClick();
                                }}>
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;

