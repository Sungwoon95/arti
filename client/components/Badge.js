import React from 'react'

const Badge = ({ text, color }) => {
  return (
    <div style={{ border: `1px solid ${color}`, color, fontSize: '12px', fontWeight: 'bold', borderRadius: '4px', height: '18px', padding: '0 4px', lineHeight: '20px' }}>
      {text}
    </div>
  )
}

export default Badge