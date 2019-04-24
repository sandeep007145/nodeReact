import {
    Input,
} from "reactstrap";

export default TextInput = ({ handler, touched, hasError, meta }) => (
    <div>
        <Input placeholder={`Enter ` + meta.label} {...handler()} />
        <span className="error">
            {touched
                && hasError("required")
                && `${meta.label} is required`}

            {touched
                && hasError("pattern")
                && `${meta.label} is invalid`}
        </span>
    </div>
)

const SelctBox = ({ handler, touched, hasError, meta }) => (
    <div>
        <Select placeholder={`Enter ` + meta.label} {...handler()} />
        <span className="error">
            {touched
                && hasError("required")
                && `${meta.label} is required`}

            {touched
                && hasError("pattern")
                && `${meta.label} is invalid`}
        </span>
    </div>
)

