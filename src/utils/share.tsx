import { EmailShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";


const ShareButtons: React.FC<{ csvData: string }> = ({ csvData }) => {
    return (
      <div className="flex gap-2">
        <EmailShareButton subject="Health Care Data" body={csvData}  url={""}>
          Email
        </EmailShareButton>
        <TwitterShareButton title="Health Care Data" url={window.location.href}>
          Twitter
        </TwitterShareButton>
        <FacebookShareButton title="Health Care Data" url={window.location.href}>
          Facebook
        </FacebookShareButton>
        <WhatsappShareButton title="Health Care Data" separator=":: " url={window.location.href}>
          Whatsapp
        </WhatsappShareButton>
      </div>
    );
  };
  
  export default ShareButtons;