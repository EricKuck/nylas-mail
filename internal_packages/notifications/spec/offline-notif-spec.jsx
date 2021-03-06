import {mount} from 'enzyme';
import {React, NylasSyncStatusStore} from 'nylas-exports';
import OfflineNotification from '../lib/items/offline-notification';

describe("OfflineNotif", function offlineNotifTests() {
  describe("When N1 is offline", () => {
    beforeEach(() => {
      spyOn(NylasSyncStatusStore, "connected").andReturn(false);
      this.notif = mount(<OfflineNotification />);
    })
    it("displays a notification", () => {
      expect(this.notif.find('.notification').exists()).toEqual(true);
    })

    it("allows the user to try connecting now", () => {

    })
  })

  describe("When N1 is online", () => {
    beforeEach(() => {
      spyOn(NylasSyncStatusStore, "connected").andReturn(true);
      this.notif = mount(<OfflineNotification />);
    })
    it("doesn't display a notification", () => {
      expect(this.notif.find('.notification').exists()).toEqual(false);
    })
  })
});
