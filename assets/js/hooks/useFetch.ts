import React from 'react'

type Status = 'loading'|'success'|'error'

function useFetch<T>(fn: () => Promise<T>, defaultValue: T|null, dependencies: any[], onChange?: (status: Status) => void) {
    const [status, setStatus] = React.useState<Status>('loading')
    const [loading, setLoading] = React.useState<boolean>(true)
    const [result, setResult] = React.useState<T|null>(defaultValue)
    const [error, setError] = React.useState<any|null>(null)

    const updateStatus = (status: Status) => {
        if (onChange) {
            onChange(status)
        }
        setStatus(status)
    }

    React.useEffect(() => {
        (async () => {
            updateStatus('loading')
            setLoading(true);
            try {
                setResult(await fn())
                updateStatus('success')
            } catch (e) {
                console.log(e)
                setError(e)
                updateStatus('error')
            }
            setLoading(false)
        })()
    }, dependencies)
    
    return {
        status,
        loading,
        result,
        error,
    }
}

export default useFetch