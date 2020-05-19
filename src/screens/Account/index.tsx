import React, { FC } from 'react';
import {AccountName, AccountText, AccountPage, AccountAvatar, AccountTitle} from "../../constans/Layout";

const Account: FC = props => {
    return (
    	<AccountPage>
            <AccountTitle>Account</AccountTitle>
            <AccountAvatar source={require('../../../assets/avatar.png')}/>
            <AccountName>Joe Doe</AccountName> 
            <AccountText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida sodales neque, non venenatis metus ultrices in. Sed eu suscipit libero, 
                non congue ipsum. Suspendisse pulvinar dui non ullamcorper porttitor. Nullam aliquam arcu arcu, posuere convallis enim porta in. Aenean laoreet, 
                elit in venenatis tincidunt, justo leo varius nibh, vitae condimentum orci erat ut nisi. In ac arcu dictum, consectetur elit gravida, accumsan lacus. 
                Proin elementum congue diam id rutrum. Aenean sapien nisl, lacinia quis tortor nec, tincidunt egestas justo. Morbi maximus metus nunc, id fermentum est pretium in. 
                Vestibulum scelerisque dictum sagittis. Donec ac turpis consectetur arcu efficitur venenatis eu non velit.
            </AccountText>  
            <AccountText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida sodales neque, non venenatis metus ultrices in. Sed eu suscipit libero, non congue ipsum. 
                Suspendisse pulvinar dui non ullamcorper porttitor. Nullam aliquam arcu arcu, posuere convallis enim porta in. Aenean laoreet, elit in venenatis tincidunt, 
                justo leo varius nibh, vitae condimentum orci erat ut nisi. In ac arcu dictum, consectetur elit gravida, accumsan lacus. Proin elementum congue diam id rutrum. 
                Aenean sapien nisl, lacinia quis tortor nec, tincidunt egestas justo. Morbi maximus metus nunc, id fermentum est pretium in. Vestibulum scelerisque dictum sagittis. 
                Donec ac turpis consectetur arcu efficitur venenatis eu non velit.
            </AccountText> 
            <AccountText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida sodales neque, non venenatis metus ultrices in. Sed eu suscipit libero, non congue ipsum. 
                Suspendisse pulvinar dui non ullamcorper porttitor. Nullam aliquam arcu arcu, posuere convallis enim porta in. Aenean laoreet, elit in venenatis tincidunt, justo leo varius nibh,
                 vitae condimentum orci erat ut nisi. In ac arcu dictum, consectetur elit gravida, accumsan lacus. Proin elementum congue diam id rutrum. Aenean sapien nisl, lacinia quis tortor nec,
                 tincidunt egestas justo. Morbi maximus metus nunc, id fermentum est pretium in. Vestibulum scelerisque dictum sagittis. Donec ac turpis consectetur arcu efficitur venenatis eu non velit.
            </AccountText> 
            <AccountText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida sodales neque, non venenatis metus ultrices in. Sed eu suscipit libero, non congue ipsum. 
                Suspendisse pulvinar dui non ullamcorper porttitor. Nullam aliquam arcu arcu, posuere convallis enim porta in. Aenean laoreet, elit in venenatis tincidunt, justo leo varius nibh, 
                vitae condimentum orci erat ut nisi. In ac arcu dictum, consectetur elit gravida, accumsan lacus. Proin elementum congue diam id rutrum. Aenean sapien nisl, lacinia quis tortor nec, 
                tincidunt egestas justo. Morbi maximus metus nunc, id fermentum est pretium in. Vestibulum scelerisque dictum sagittis. Donec ac turpis consectetur arcu efficitur venenatis eu non velit.
            </AccountText>      
        </AccountPage>
    );
};

export default Account;