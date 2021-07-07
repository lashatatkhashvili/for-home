import React from 'react';

export const StopIcon = props => {
  return (
    <svg  width="110" height="40" viewBox="0 0 110 40">
      <g fill="none" fill-rule="evenodd">
        <path fill="#E0E5E7" d="M90.267 39.385H19.733C8.835 39.385 0 30.568 0 19.692 0 8.817 8.835 0 19.733 0h70.534C101.165 0 110 8.817 110 19.692c0 10.876-8.835 19.693-19.733 19.693z"/>
        <g transform="translate(69 4)">
          <circle cx="15.077" cy="16.308" r="15.077" fill="#A44553" fill-rule="nonzero"/>
          <circle cx="15.897" cy="15.077" r="15.077" fill="#D74D5F"/>
          <g fill="#2E3537" fill-rule="nonzero" opacity=".3">
            <path d="M8.158.075c-.885 0-1.601.717-1.601 1.6v10.247c0 .885.716 1.601 1.6 1.601.885 0 1.602-.716 1.602-1.6V1.675c0-.884-.717-1.601-1.601-1.601zM14.561.075c-.884 0-1.6.717-1.6 1.6v10.247c0 .885.716 1.601 1.6 1.601.885 0 1.601-.716 1.601-1.6V1.675c0-.884-.716-1.601-1.6-1.601zM1.753.075c-.884 0-1.6.717-1.6 1.6v10.247c0 .885.716 1.601 1.6 1.601.885 0 1.601-.716 1.601-1.6V1.675c0-.884-.716-1.601-1.6-1.601z" transform="translate(9.026 8.41)"/>
          </g>
        </g>
        <text fill="#678189" font-family="HelveticaNeue, Helvetica Neue" font-size="19.692" opacity=".96">
          <tspan x="7.694" y="27">{props.text}</tspan>
        </text>
      </g>
    </svg>
  )
}

export const LiveIcon = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="40" viewBox="0 0 96 40">
      <g fill="none" fill-rule="evenodd">
        <path fill="#E0E5E7" d="M76.267 39.385H19.733C8.835 39.385 0 30.568 0 19.692 0 8.817 8.835 0 19.733 0h56.534C87.165 0 96 8.817 96 19.692c0 10.876-8.835 19.693-19.733 19.693z"/>
        <circle cx="70.256" cy="21.026" r="15.077" fill="#4F946D" fill-rule="nonzero"/>
        <circle cx="71.077" cy="19.795" r="15.077" fill="#5EBE84" fill-rule="nonzero"/>
        <path fill="#2E3537" fill-rule="nonzero" d="M72.363 13.203c-.885 0-1.601.717-1.601 1.601V25.05c0 .885.716 1.601 1.6 1.601.885 0 1.602-.716 1.602-1.6V14.803c0-.884-.717-1.6-1.601-1.6zM78.767 13.203c-.885 0-1.601.717-1.601 1.601V25.05c0 .885.716 1.601 1.6 1.601.885 0 1.602-.716 1.602-1.6V14.803c0-.884-.717-1.6-1.601-1.6zM65.959 13.203c-.885 0-1.601.717-1.601 1.601V25.05c0 .885.716 1.601 1.6 1.601.885 0 1.602-.716 1.602-1.6V14.803c0-.884-.717-1.6-1.601-1.6z" opacity=".3"/>
        <text fill="#678189" font-family="HelveticaNeue, Helvetica Neue" font-size="19.692" opacity=".96">
          <tspan x="7.533" y="27">{props.text}</tspan>
        </text>
      </g>
    </svg>

  )
}

