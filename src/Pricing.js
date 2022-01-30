import * as React from 'react'

export function Pricing (props) {
  const features = props.features
  const listItems = features.map((feature) =>
    <li key={feature.toString()}> {feature} </li>
  )
  return (
    <ul>{listItems}</ul>

  )
}

export const features = ['Single User', ' 5GB Storage', ' Unlimited Public Projects', 'Communinty Access', ' Unlimited Private Projects', 'Dedicated Phone Support', 'Free SubDomain', 'Monthly Status Reports']
