import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Струнные'},
            {id: 2, name: 'Ударные'},
            {id: 3, name: 'Клавишные'},
            {id: 4, name: 'Студийное оборудование'}
        ]
        this._brands = [
            {id: 1, name: 'Gibson'},
            {id: 2, name: 'Yamaha'}
        ]
        this._devices = [
            {id: 1, name: 'Gibson Les Paul Standard 50s Heritage Cherry Sunburst', price: 9999, rating: 5, img: 'https://images.musicstore.de/images/1280/gibson-les-paul-standard-50s-heritage-cherry-sunburst_1_GIT0049490-000.jpg'},
            {id: 2, name: 'Gibson Les Paul Standard 50s Heritage Cherry Sunburst', price: 9999, rating: 5, img: 'https://images.musicstore.de/images/1280/gibson-les-paul-standard-50s-heritage-cherry-sunburst_1_GIT0049490-000.jpg'},
            {id: 3, name: 'Gibson Les Paul Standard 50s Heritage Cherry Sunburst', price: 9999, rating: 5, img: 'https://images.musicstore.de/images/1280/gibson-les-paul-standard-50s-heritage-cherry-sunburst_1_GIT0049490-000.jpg'},
            {id: 4, name: 'Gibson Les Paul Standard 50s Heritage Cherry Sunburst', price: 9999, rating: 5, img: 'https://images.musicstore.de/images/1280/gibson-les-paul-standard-50s-heritage-cherry-sunburst_1_GIT0049490-000.jpg'},
            {id: 5, name: 'Gibson Les Paul Standard 50s Heritage Cherry Sunburst', price: 9999, rating: 5, img: 'https://images.musicstore.de/images/1280/gibson-les-paul-standard-50s-heritage-cherry-sunburst_1_GIT0049490-000.jpg'}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    
    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get selectedType() {
        return this._selectedType
    }

    get types() {
        return this._types
    }
    
    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

}