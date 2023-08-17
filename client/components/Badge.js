import React from 'react'

const Badge = ({ text, color, cls }) => {
  return (
    <span className={cls} style={{ border: `1px solid ${color}`, boxSizing: 'border-box', textAlign: 'center', color, fontSize: '12px', fontWeight: 'bold', borderRadius: '20px', height: '20px', padding: '0 4px', lineHeight: '20px', display: 'inline-block' }}>
      {text}
    </span>
  )
}

export default Badge