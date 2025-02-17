

type Props = {
    params: Students
}

export default async function recordAttendance({ params }: Props) {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_IP_API}api/register-attendance/`,
            {
                method: 'POST',
                body: JSON.stringify(params),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        var response = await res.json()

    } catch (error) {
        console.log("Unable to POST Record Attendance", error)
    }

    return response
}