import { List } from "@/components/ui/list"

export const Rubric = () => {
    const items = [
        "Unsatisfactory = Below expectations for a student with this amount of training and experience.",
        "Satisfactory = Meets expectations for a student with this amount of training and experience.",
        "Excellent = Exceeds expectations for a student with this amount of training and experience.",
        "Not Applicable = You were unable to observe this skill with the student or site did not offer an opportunity for the student to utilize this skill."
    ]
    return (
        <div className="space-y-2.5">
            <h2 className="text-primary font-bold text-lg">
                Evaluation Rubric
            </h2>
            <div>
                <List items={items}/>
            </div>
        </div>
    )
}