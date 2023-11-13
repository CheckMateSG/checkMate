import { Alert } from "@material-tailwind/react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { BellAlertIcon } from "@heroicons/react/20/solid";


//true for pending messages, fale for update on pending VOTE
export default function PendingMessageAlert({ Type }: { Type: boolean }) {
    return (
        <Alert
            icon={Type ? <EnvelopeIcon className="h-6 w-6 text-highlight-color" /> : <BellAlertIcon className="h-6 w-6 text-highlight-color" />}
            className="rounded items-center border-l-4 border-highlight-color bg-[highlight-color]/5 font-medium text-highlight-color shadow-md"
        >
            {Type ? "1 pending message to view!" : "2 Crowd Vote updates!"}
        </Alert>
    );
}