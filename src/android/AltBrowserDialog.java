/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
*/
package org.apache.cordova.altbrowser;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by Oliver on 22/11/2013.
 */
public class AltBrowserDialog extends Dialog {
    Context context;
    AltBrowser altBrowser = null;

    public AltBrowserDialog(Context context, int theme) {
        super(context, theme);
        this.context = context;
    }

    public void setAltBroswer(AltBrowser browser) {
        this.altBrowser = browser;
    }

    public void onBackPressed () {
        if (this.altBrowser == null) {
            this.dismiss();
        } else {
            // better to go through the in altBrowser
            // because it does a clean up
            if (this.altBrowser.hardwareBack() && this.altBrowser.canGoBack()) {
                this.altBrowser.goBack();
            }  else {
                this.altBrowser.closeDialog();
            }
        }
    }
}
