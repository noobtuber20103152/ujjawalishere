import React from 'react';
import EducationComponent from '../Education/EducationComponent';
function Competitive(props) {
    return <>
        <div className={`flex justify-center  pt-20 pb-5`}>
            <h1 className={`text-gray-800 text-2xl text-center md:text-3xl font-bold`}>Competitive Programming</h1>
        </div>
        <div className={`flex flex-wrap justify-around pb-10 bg-white`}>
            <EducationComponent Plateform={true} link="https://binarysearch.com/@/ujjawalrachhoya" tag="@ujjawalrachhoya" title="Binary Search" desc="More than 300 DSA question solved, level 70 more than 2500 experience gained and more than 200 day streak" />
            <EducationComponent Plateform={true} link="https://leetcode.com/ujjawalrachhoya100/" tag="ujjawalrachhoya100" title="Leetcode" desc="More than 200 DSA question solved and regularly participate in coding contest" />
            <EducationComponent Plateform={true} link="https://www.codechef.com/users/ujjawal_100" tag="ujjawal_100" title="Codechef" desc="Regularly participate in the contest." btn="Octomber 2018" />
        </div>
    </>
}

export default Competitive;
