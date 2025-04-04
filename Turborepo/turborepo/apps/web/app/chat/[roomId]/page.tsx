import { TextInput } from "@repo/ui/textinput";

export default function Chat() {
    return <div style={{
        width:'100vw',
        height:'100vh',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'column',
    }}>
        <div>
            Chat Room
        </div>
        <div>
            <TextInput size="big" placeholder="Chat here"/>
        </div>
    </div>
}