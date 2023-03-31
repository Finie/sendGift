//
//  ContactsManager.m
//  sendGift
//
//  Created by fin on 29/03/2023.
//

#import <Foundation/Foundation.h>
#import "sendGift-Bridging-Header.h"
#import "React/RCTBridgeModule.h"



@interface RCT_EXTERN_MODULE(ContactsManager, NSObject)
  RCT_EXTERN_METHOD(readphonecontact:
    (RCTResponseSenderBlock) callback
  )
@end
