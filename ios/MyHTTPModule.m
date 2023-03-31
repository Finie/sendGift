//
//  MyHTTPModule.m
//  sendGift
//
//  Created by fin on 28/03/2023.
//

#import <Foundation/Foundation.h>
#import "sendGift-Bridging-Header.h"

@interface RCT_EXTERN_MODULE(MyHTTPModule, NSObject)

RCT_EXTERN_METHOD(makeRequest:(NSString *)url params:(NSDictionary *)params resolver:(RCTPromiseResolveBlock)resolver rejecter:(RCTPromiseRejectBlock)rejecter)

@end
