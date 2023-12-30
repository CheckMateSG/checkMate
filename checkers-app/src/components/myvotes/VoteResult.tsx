import { Typography } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShieldExclamationIcon } from "@heroicons/react/24/solid";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import { FaceFrownIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { HandThumbUpIcon } from "@heroicons/react/20/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { BugAntIcon } from "@heroicons/react/20/solid";

interface PropType {
    category: string | null,
    truthScore: number | null
}

export default function VoteResult(Prop: PropType) {
    const getIconAndName = () => {
        let catIcon, catName;
        switch (Prop.category) {
            case 'scam':
                catName = "Scam";
                catIcon = <XMarkIcon className="h-7 w-7" />;
                break;
            case 'illicit':
                catName = "Illicit";
                catIcon = <ShieldExclamationIcon className="h-7 w-7" />;
                break;
            case 'info':
            case 'untrue':
            case 'misleading':
            case 'accurate':
                catName = `News/Info/Opinion\n${Prop.truthScore}`;
                catIcon = <LightBulbIcon className="h-7 w-7" />;
                break;
                break;
            case 'spam':
                catName = "Spam";
                catIcon = <FaceFrownIcon className="h-7 w-7" />;
                break;
            case 'trivial':
                catName = "Trivial";
                catIcon = <CheckCircleIcon className="h-7 w-7" />;
                break;
            case 'legitimate':
                catName = "Legitimate";
                catIcon = <HandThumbUpIcon className="h-7 w-7" />;
                break;
            case 'satire':
                catName = "Satire";
                catIcon = <BugAntIcon className="h-7 w-7" />;
                break;
            default:
                catName = "Unsure";
                catIcon = <QuestionMarkCircleIcon className="h-7 w-7" />;
                break;
        }
        return [catIcon, catName];
    };
    const [catIcon, catName] = getIconAndName();

    return (
        <div className="grid grid-flow-row justify-items-center text-center rounded-lg shadow-md p-3 bg-primary-color text-background-color">
            {catIcon}
            <Typography>{catName}</Typography>
        </div>
    )
}