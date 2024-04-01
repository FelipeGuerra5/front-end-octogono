type Props = {
    params: {
        period: string,
        schoolGrade: number
    }
}

export default async function getStudents({ params }: Props) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_IP_API}api/view-attendance/?period=Vespertino&schoolGrade=6&classMeta=Português&teacher=1&date=2024-03-31`);
    const students = await res.json();
    return students
}