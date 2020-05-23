import React from 'react'

function useStatus<Statuses extends string>(defaultStatus: Statuses) {
    const [status, setStatus] = React.useState<Statuses>(defaultStatus)

    type Props = {
        [key in Statuses]: React.ReactElement
    }
    const Status = (props: Props) => {
        return props[status] || null
    }
    
    return { Status, setStatus }
}

export default useStatus