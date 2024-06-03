import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    // const chatProps = useMultiChatLogic(
    //     '7e382f82-e85e-4b63-b1db-54ff6f0dcda8',
    //     props.user.username,
    //     props.user.secret
    // );

    return (
        <div style={{ height: '100vh' }}>
            {/* <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} /> */}
            <PrettyChatWindow
             projectId='7e382f82-e85e-4b63-b1db-54ff6f0dcda8'
             username={props.user.username}
             secret={props.user.secret}
             style={{height: '100%'}}
             />

        </div>
    );
};

export default ChatsPage;
