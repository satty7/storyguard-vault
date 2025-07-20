// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract StoryGuard {
    struct Story {
        string title;
        string content;
        address author;
        uint256 timestamp;
    }

    Story[] public stories;

    event StoryAdded(string title, address indexed author);

    function addStory(string memory _title, string memory _content) public {
        stories.push(Story(_title, _content, msg.sender, block.timestamp));
        emit StoryAdded(_title, msg.sender);
    }

    function getStory(uint index) public view returns (string memory, string memory, address, uint256) {
        require(index < stories.length, "Story index out of bounds");
        Story memory s = stories[index];
        return (s.title, s.content, s.author, s.timestamp);
    }

    function getStoriesCount() public view returns (uint) {
        return stories.length;
    }
}
