//import { useState } from 'react'

export default function ContactRow({ bubbles }) {
    return (
      <tr>
        <td>{bubbles.name}</td>
        <td>{bubbles.email}</td>
        <td>{bubbles.phone}</td>
      </tr>
    );
  }
